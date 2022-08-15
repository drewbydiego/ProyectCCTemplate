from selenium import webdriver
import time

#Precio del Bitcoin con Web Scraping (Python y Selenium)

PATH = "C:\Program Files (x86)\chromedriver.exe"

driver = webdriver.Chrome(PATH)

driver.get("https://es.investing.com/crypto/bitcoin")

