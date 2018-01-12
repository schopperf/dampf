package at.fh.ima.swengs.dampf.controller;

import at.fh.ima.swengs.dampf.model.Account;
import at.fh.ima.swengs.dampf.model.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class AccountController {

    @Autowired
    AccountRepository accountRepository;


    @RequestMapping(value = {"/accounts", "accounts"})
    @ResponseBody
    public Iterable<Account> getAccounts() {

        System.out.println("Hi");

        return accountRepository.findAll();
    }


    @RequestMapping(value = {"/test", "test"})
    @ResponseBody
    public String testPage()
    {

        return "IT WORKS!!!";
    }
}
