package at.fh.ima.swengs.dampf.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource()
public interface GameRepository  extends PagingAndSortingRepository<Game, Long> {

    Game findById(@Param("Id") long id);

    List<Game> findByNameContaining(@Param("name") String name);
}
