import eel
import sys
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time


import ctypes

#Precio del Bitcoin con Web Scraping (Python y Selenium)
sys.path.append("..")

PATH = "chromedriver.exe"

driver = webdriver.Chrome(PATH)

driver.get("https://www.instagram.com/eltallerdetd/")
item = driver.find_element(by=By.XPATH, value='//*[@id="react-root"]/section/main/div/header/section/ul/li[2]/button/div/span')
print(driver.page_source)
print(item.text)