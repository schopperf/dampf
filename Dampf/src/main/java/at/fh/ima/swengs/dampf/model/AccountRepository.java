package at.fh.ima.swengs.dampf.model;

        import org.springframework.data.repository.PagingAndSortingRepository;
        import org.springframework.data.repository.query.Param;
        import org.springframework.data.rest.core.annotation.RepositoryRestResource;

        import java.util.List;


@RepositoryRestResource()
public interface AccountRepository extends PagingAndSortingRepository<Account, Long> {

        List<Account> findByNicknameContaining(@Param("nickname") String nickname);

        List<Account> findByLoginNameAndPassword(@Param("loginName") String loginName, @Param("password") String password);

        Account findByNickname(@Param("nickname") String nickname);

        Account findById(@Param("id") long id);
}
