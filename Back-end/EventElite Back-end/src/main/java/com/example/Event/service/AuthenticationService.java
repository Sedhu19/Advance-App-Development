package com.example.Event.service;

import java.io.IOException;

import com.example.Event.dto.request.LoginRequest;
import com.example.Event.dto.request.RegisterRequest;
import com.example.Event.dto.response.LoginResponse;
import com.example.Event.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
