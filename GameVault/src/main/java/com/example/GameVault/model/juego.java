package com.example.GameVault.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class juego {
    private Long id;
    private String titulo;
    private String descripcion;
    private String portadaUrl;
}
