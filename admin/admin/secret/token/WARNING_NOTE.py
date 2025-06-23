from flask import Flask, render_template_string

app = Flask(__name__)

@app.route("/")
def home():
    return render_template_string("""
    <!DOCTYPE html>
    <html>
    <head>
        <title>VoidBot Admin</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: #0f0c29;
                color: white;
            }
            .warning {
                background-color: #ff3333;
                color: white;
                padding: 12px;
                text-align: center;
                font-weight: bold;
            }
            .content {
                padding: 40px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="warning">
            ⚠️ If you are caught IP spoofing you may be fined for 'Fraud'. So be careful!
        </div>
        <div class="content">
            <h1>Welcome to the VoidBot Admin Panel</h1>
            <p>Your access is being monitored and verified.</p>
        </div>
    </body>
    </html>
    """)

if __name__ == "__main__":
    app.run(debug=True)
