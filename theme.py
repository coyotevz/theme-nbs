# -*- coding: utf-8 -*-

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/ui-buttons')
def ui_buttons():
    return render_template('ui-buttons.html')

@app.route('/forms')
def forms():
    return render_template('forms.html')

@app.route('/tables')
def tables():
    return render_template('tables.html')

@app.route('/widgets')
def widgets():
    return render_template('widgets.html')

@app.route('/404')
def error404():
    return render_template('error.html', code='404', message='Page not found')

@app.route('/500')
def error500():
    return render_template('error.html', code='500', message="Something's wrong with server")

if __name__ == '__main__':
    app.run('0', 8002, debug=True)
