import eel
import sys
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time


import ctypes


user32 = ctypes.windll.user32
user32.SetProcessDPIAware()
ancho, alto = user32.GetSystemMetrics(0), user32.GetSystemMetrics(1)


sys.path.append("..")
eel.init("./")
uAvailable = " "
@eel.expose
#Parametro recibido de javascript
def desdePython(URLItem, StoreCheck):
    #print(URLItem)
    DriverOptions = webdriver.ChromeOptions()
    DriverOptions.add_argument('--start-maximized')
    DriverOptions.add_argument('--disable-extensions')
    PATH = "chromedriver.exe"
    driver = webdriver.Chrome(PATH)
    driver.get(URLItem)
    if StoreCheck:
        print("Store has been selected")

        driver.find_element(By.XPATH, '//*[@id="pd-zip-search-input"]').send_keys('texas')
        driver.delete_all_cookies()

        WebDriverWait(driver, 1).until(EC.element_to_be_clickable(
            (By.XPATH, '//*[@id="pd-zip-search-btn"]'))).click()
        driver.delete_all_cookies()

        driver.find_element(By.XPATH,
                            '//*[@id="pd-zip-search"]/div/div/div/div/div/div[2]/div/div/div[1]/form/button').click()
        driver.delete_all_cookies()

        driver.find_element(By.XPATH, '//*[@id="storeListContainer"]/div/div[1]/div/div/div[4]/button').click()



    ItemTitle = driver.find_element(by=By.XPATH, value='//*[@id="pdp-lpd"]/div/div[1]/h1')
    ItemNumber = driver.find_element(by=By.XPATH, value='//*[@id="pdp-lpd"]/div/div[2]/p[1]')
    ItemModel = driver.find_element(by=By.XPATH, value='//*[@id="pdp-lpd"]/div/div[2]/p[2]')
    time.sleep(1)
    FoundData = ItemTitle.text + "\n" + ItemNumber.text + "\n" + ItemModel.text + "\n\n" + "Click here to see the item:\n" + URLItem

    return FoundData

#Inicializando la pagina
eel.start("../index.html", size=(ancho,alto))