package at.fh.ima.swengs.dampf.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    private int releaseYear;

    private Double price;

    private int ageRestriction;

    @OneToMany(mappedBy = "game", orphanRemoval = true)
    private List<GameAccount> gameAccounts;

    @Version
    private long version;

    public Game() {

    }

    public Game(String name, int releaseYear, Double price, int ageRestriction) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.price = price;
        this.ageRestriction = ageRestriction;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int release) {
        this.releaseYear = release;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public int getAgeRestriction() {
        return ageRestriction;
    }

    public void setAgeRestriction(int ageRestriction) {
        this.ageRestriction = ageRestriction;
    }

    public List<GameAccount> getGameAccounts() {
        return gameAccounts;
    }

    public void setGameAccounts(List<GameAccount> gameAccounts) {
        this.gameAccounts = gameAccounts;
    }
}
