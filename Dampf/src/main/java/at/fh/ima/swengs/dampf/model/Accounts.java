package at.fh.ima.swengs.dampf.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.provider.NoSuchClientException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Accounts implements UserDetailsService {

    private AccountRepository accountRepository;


    @Autowired
    public Accounts(AccountRepository accRepo) {
        this.accountRepository = accRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String nickname)
            throws UsernameNotFoundException {
        Account account= accountRepository.findByNickname(nickname);
        if (account == null) {
            throw new NoSuchClientException("No customer found with nickname: " + nickname);
        }
        List<GrantedAuthority> auth = AuthorityUtils
                .commaSeparatedStringToAuthorityList("ROLE_USER");
        if (nickname.endsWith("admin")) {
            auth = AuthorityUtils
                    .commaSeparatedStringToAuthorityList("ROLE_ADMIN");
        }
        String password = account.getPassword();
        return new org.springframework.security.core.userdetails.User(nickname, password, auth);
    }
}
