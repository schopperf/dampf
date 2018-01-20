package at.fh.ima.swengs.dampf.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource()
public interface GameAccountRepository extends PagingAndSortingRepository<GameAccount, Long> {

    List<GameAccount> findByAccount_Id(@Param("Id")long id);
}
