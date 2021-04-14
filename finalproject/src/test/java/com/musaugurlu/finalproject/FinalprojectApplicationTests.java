package com.musaugurlu.finalproject;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class FinalprojectApplicationTests {
    private static String baseUrl;
    public FinalprojectApplicationTests() {
         baseUrl = "https://www.na.edu";
    }

    @Test
    void contextLoads() {
    }

    @Test
    void myFirstTest(){
        System.setProperty("webdriver.chrome.driver","C:\\Users\\musau\\Desktop\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get(baseUrl);
        String pageTitle = driver.getTitle();
        WebElement logo = driver.findElement(By.className("logo"));
        System.out.println(logo.isDisplayed());
        System.out.println(pageTitle);
        driver.close();
    }

}
