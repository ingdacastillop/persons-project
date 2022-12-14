package org.danielcastillo.backend.application;

public record Response(boolean success, String message, Object data) {
}
