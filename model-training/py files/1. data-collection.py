
import cv2 #importing required dependencies
import uuid
import os
import time

labels = ['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'] # Define Images
number_imgs = 35

IMAGES_PATH = os.path.join('Tensorflow', 'workspace', 'images', 'collectedimages') #path
if not os.path.exists(IMAGES_PATH):
    os.makedirs(IMAGES_PATH)

for label in labels:  # make directories for each labels
    path = os.path.join(IMAGES_PATH, label)
    if not os.path.exists(path):
        os.makedirs(path)

for label in labels:  # capturing the images for labels
    cap = cv2.VideoCapture(0)
    print('Collecting images for {}'.format(label))
    print("Capturing next alphabet in 10 seconds")
    time.sleep(15)
    for imgnum in range(number_imgs):
        print('Collecting image {}'.format(imgnum))
        print("Keep the pose intended. will wait for 5secs")
        time.sleep(5)
        ret, frame = cap.read()
        imgname = os.path.join(IMAGES_PATH,label,label+'.'+'{}.jpg'.format(str(uuid.uuid1())))
        cv2.imwrite(imgname, frame)
        cv2.imshow('frame', frame)
        print("Done capturing! Change the pose!!")
        time.sleep(5)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
cap.release()
cv2.destroyAllWindows()



