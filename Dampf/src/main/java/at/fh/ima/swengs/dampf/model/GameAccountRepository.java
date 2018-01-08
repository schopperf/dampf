package at.fh.ima.swengs.dampf.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface GameAccountRepository extends PagingAndSortingRepository<GameAccount, Long> {
}