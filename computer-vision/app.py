import cv2
import time
import socketio

# Connect to the backend
sio = socketio.Client()
sio.connect('http://127.0.0.1:5000')

def process_frame(frame):
    # Your CV processing code here (e.g., object detection, face recognition)
    return frame

# Initialize video capture
cap = cv2.VideoCapture(0)
frame_rate = 10  # Process 10 frames per second
prev = 0

while True:
    time_elapsed = time.time() - prev
    ret, frame = cap.read()
    
    if time_elapsed > 1./frame_rate:
        prev = time.time()

        # Reduce resolution
        frame = cv2.resize(frame, (640, 480))
        
        # Process the frame
        processed_frame = process_frame(frame)

        # Send processed data to the backend
        # For example, if the CV algorithm detects a change in room status
        sio.emit('roomUpdate', {'roomNumber': 101, 'status': 'Occupied'})

        # Display the frame
        cv2.imshow('Frame', processed_frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
sio.disconnect()
