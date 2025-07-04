#!/opt/venv/bin/python

print("Content-type: text/plain\n\n")

try:
    import RPi.GPIO as GPIO
    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(17, GPIO.OUT)
    GPIO.output(17, GPIO.HIGH)
    print("SUCCESS: LED ON - GPIO17 HIGH")
except Exception as e:
    print(f"ERROR: {str(e)}")

# Add status feedback
#GPIO.setup(17, GPIO.IN)
#state = GPIO.input(17)
#print(f"\nGPIO17 state: {state}")
