# Wishlist

* Use another ML tool

# Code

```bash
git clone https://github.com/chrisjd20/img_rec_tf_ml_demo.git
cd img_rec_tf_ml_demo
sudo apt install python3 python3-pip -y
sudo python3 -m pip install --upgrade pip
sudo python3 -m pip install --upgrade setuptools
sudo python3 -m pip install --upgrade tensorflow==1.15
sudo python3 -m pip install tensorflow_hub
python3 retrain.py --image_dir ./training_images/ --tfhub_module https://tfhub.dev/google/imagenet/mobilenet_v1_025_128/feature_vector/3
python3 solve.py 
```
