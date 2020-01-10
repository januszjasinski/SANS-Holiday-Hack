import urllib
for i in range(1000):
    a = '{0:06}'.format(i)
    print(a)
    urllib.urlretrieve("https://key.elfu.org/backend/keys/SC4_preview/"+a+".png", a+".png")