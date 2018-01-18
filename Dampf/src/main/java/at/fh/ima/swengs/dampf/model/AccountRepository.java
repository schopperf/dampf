package at.fh.ima.swengs.dampf.model;

        import org.springframework.data.repository.PagingAndSortingRepository;
        import org.springframework.data.repository.query.Param;
        import org.springframework.data.rest.core.annotation.RepositoryRestResource;

        import java.util.List;


@RepositoryRestResource()
public interface AccountRepository extends PagingAndSortingRepository<Account, Long> {

        List<Account> findByNicknameContaining(@Param("nickname") String nickname);

        List<Account> findByNicknameOrLoginName(@Param("nickname") String nickname, @Param("loginName") String loginName);

        Account findByNickname(@Param("nickname") String nickname);
}
