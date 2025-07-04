#!/opt/venv/bin/python3
print("Content-type: text/plain\n\n")
try:
    import RPi.GPIO as GPIO
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(17, GPIO.OUT)
    GPIO.output(17, GPIO.HIGH)
    print("GPIO 17 should be ON")
except Exception as e:
    print(f"Error: {str(e)}")
