from flask import Flask, request, render_template,jsonify
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import numpy as np
import io
from transformers import GPT2LMHeadModel, GPT2Tokenizer
import os
import re
model_name = "gpt2"
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
gpt2_model = GPT2LMHeadModel.from_pretrained(model_name)
app = Flask(__name__)


model = load_model('inception_model')

class_names = ['Clams', 'Corals', 'Crabs', 'Dolphin', 'Eel', 'Fish', 'Jelly Fish', 'Lobster', 'Nudibranchs', 'Octopus', 'Otter', 'Penguin', 'Puffers', 'Sea Rays', 'Sea Urchins', 'Seahorse', 'Seal', 'Sharks', 'Shrimp', 'Squid', 'Starfish', 'Turtle_Tortoise', 'Whale']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify(["Error", None]), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify(["Error", None]), 400
    if file:
        file_stream = io.BytesIO(file.read())
        img = image.load_img(file_stream, target_size=(299, 299))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array /= 255.

        predictions = model.predict(img_array)
        predicted_class = np.argmax(predictions, axis=1)
        # predictions = model.predict(img_array)
        # predicted_class = np.argmax(predictions, axis=1)
        predicted_probability = np.max(predictions, axis=1)
        if predicted_class.size == 0:
            return jsonify(["Error", None]), 400

        if predicted_class[0] >= len(class_names):
            return jsonify(["Error", None]), 400
        print(predicted_probability)
        return jsonify([class_names[predicted_class[0]], int(predicted_class[0]), float(predicted_probability[0])])
        # return jsonify([class_names[predicted_class[0]], int(predicted_class[0])])


@app.route('/popup-contact')
def popup_contact():
    return render_template('popupContact.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.form.get('message')  # Get user's message from the form
    if not user_message:
        return jsonify({"response": "Please provide a question."})

    # Define the function to generate an answer
    def is_related_to_marine_animals(answer):
        # List of keywords related to marine animals
        keywords = ["fish", "ocean", "marine", "sea", "aquatic", "coral", "shark", "whale", "dolphin", "clams", "crabs"]
        return any(keyword in answer.lower() for keyword in keywords)
    def generate_answer(question, context):
        input_text = f"Context: {context[:1024]}\nQuestion: {question}\nAnswer:"
        input_ids = tokenizer.encode(input_text, return_tensors='pt')

        # Generate a response with a maximum length using the GPT-2 model
        output = gpt2_model.generate(input_ids, max_length=300, num_return_sequences=1, no_repeat_ngram_size=2,
                                pad_token_id=tokenizer.eos_token_id)
        generated_text = tokenizer.decode(output[0], skip_special_tokens=True)

        # Use regex to extract only the complete answer part
        match = re.search(r"Answer: ([\s\S]*?\.)", generated_text)
        if match:
            return match.group(1).strip()
        else:
            return "No answer found."

    # File path to the text file containing animal information
    file_path = "hello"
    if file_path and user_message:
        # Read text from the file
        with open(file_path, 'r', encoding='utf-8') as file:
            text = file.read()

        # Generate an answer
        answer = generate_answer(user_message, text)
        if is_related_to_marine_animals(answer):
            return jsonify({"response": answer})
        else:
            return jsonify({"response": "Your question does not seem to be related to marine animals."})
        # Return the response to the chat
        # return jsonify({"response": answer})

    return jsonify({"response": "Please enter a valid question."})


if __name__ == '__main__':
    app.run(debug=True)
