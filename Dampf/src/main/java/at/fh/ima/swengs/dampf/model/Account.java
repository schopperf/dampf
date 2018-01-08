package at.fh.ima.swengs.dampf.model;

import at.fh.ima.swengs.dampf.util.JsonDateDeserializer;
import at.fh.ima.swengs.dampf.util.JsonDateSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String nickname;

    private String loginName;

    @JsonIgnore
    private String password;

    @JsonDeserialize(using = JsonDateDeserializer.class)
    @JsonSerialize(using = JsonDateSerializer.class)
    @Temporal(TemporalType.DATE)
    private Date registerDate;

    private String email;

    @OneToMany(mappedBy = "account", orphanRemoval = true)
    private List<GameAccount> gameAccounts;

    @Version
    private long version;

    public Account()
    {

    }

    public Account(String nickname, String loginName, Date registerDate, String email) {
        this.nickname = nickname;
        this.loginName = loginName;
        this.registerDate = registerDate;
        this.email = email;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<GameAccount> getGameAccounts() {
        return gameAccounts;
    }

    public void setGameAccounts(List<GameAccount> gameAccounts) {
        this.gameAccounts = gameAccounts;
    }
}
