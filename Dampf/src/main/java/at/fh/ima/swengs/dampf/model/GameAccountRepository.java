package at.fh.ima.swengs.dampf.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource()
public interface GameAccountRepository extends PagingAndSortingRepository<GameAccount, Long> {


    //TODO: IDK..........................
    /*@Query("SELECT ga.id, a.id " +
            "FROM GameAccount ga INNER JOIN ga.account a " +
            "WHERE a.id = ?1")*/
    List<GameAccount> findByAccount_Id(@Param("Id")long id);
}
