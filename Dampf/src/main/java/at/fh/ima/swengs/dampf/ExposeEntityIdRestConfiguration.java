package at.fh.ima.swengs.dampf;

import at.fh.ima.swengs.dampf.model.Account;
import at.fh.ima.swengs.dampf.model.Game;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;


@Configuration
public class ExposeEntityIdRestConfiguration extends RepositoryRestConfigurerAdapter {

  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
    config.exposeIdsFor(Game.class);
    config.exposeIdsFor(Account.class);
  }
}