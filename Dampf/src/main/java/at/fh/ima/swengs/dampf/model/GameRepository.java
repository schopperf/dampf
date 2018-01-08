package at.fh.ima.swengs.dampf.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface GameRepository  extends PagingAndSortingRepository<Game, Long> {
}
