package com.HomeDecor.jrsc.registration;

import com.HomeDecor.jrsc.appUser.AppUser;
import com.HomeDecor.jrsc.appUser.AppUserRole;
import com.HomeDecor.jrsc.appUser.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class RegistrationService {
    private AppUserService appUserService;
    private EmailValidator emailValidator;

    public String register(RegistrationRequest request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());
        if(!isValidEmail) {
            throw new IllegalStateException("Email not valid");
        }
        return appUserService.signUpUser(
                new AppUser(
                        request.getFirstName(),
                        request.getLastName(),
                        request.getEmail(),
                        request.getDateOfBirth(),
                        request.getPhoneNumber(),
                        request.getGender(),
                        request.getUserName(),
                        request.getPassword(),
                        AppUserRole.USER
                )
        );
    }
}
