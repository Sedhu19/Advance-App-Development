package com.example.Event.service;

import java.security.Principal;

import com.example.Event.dto.request.PasswordRequest;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

}
