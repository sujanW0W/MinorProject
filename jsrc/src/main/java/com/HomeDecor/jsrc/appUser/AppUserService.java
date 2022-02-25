package com.HomeDecor.jsrc.appUser;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsPasswordService;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {

    //reference to repository
    private ClientRepository clientRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private final static String USER_NOT_FOUND =
            "user with email %s not found";

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        return clientRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(
                        String.format(USER_NOT_FOUND)));
    }

    public String signUpUser(AppUser appUser) {
        boolean userExists = clientRepository.findByUsername(appUser.getUsername())
                .isPresent();
        if(userExists) {
            throw new IllegalStateException("Username already Taken");
        }

        String encodedPassword = bCryptPasswordEncoder.encode(appUser.getPassword());

        appUser.setPassword(encodedPassword);
        clientRepository.save(appUser);
        //TODO: Send confirmation token

        return "Work??";
    }

}
