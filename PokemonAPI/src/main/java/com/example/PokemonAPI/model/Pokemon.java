package com.example.PokemonAPI.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long  id;

    @NotBlank(message= "El nombre no puede ser vacio")
    @Size(min=2, max=50, message = "EL nombre debe tener entre 2 a 50 caracteres")
    private String nombre;

    @NotBlank(message = "El tipo no puede ser vacio")
    private String tipo;

    @NotNull(message = "EL nivel es requerido")
    @Min(value= 1, message = "El minimo es 1")
    @Max(value=100, message = "EL nivel maximo es 100")
    private Integer nivel;

    @Min(value=1, message = "El ataque minimo es 1")
    private Integer ataque;

    @Min(value = 1, message = "La defensa no puede ser negativa")
    private Integer defensa;

    @Size(max = 255, message = "La longitud de la descripcion no puede exceder los 255 caracteres")
    private String descripcion;

    @URL(message = "La imagen debe ser una URL")
    private String imagenUrl;

    @Email(message = "EL correo debe tener un ormato valido")
    private String correo;

    @PastOrPresent(message = "La fecha de nacimineto no puede ser mayor a la actual")
    private LocalDate fechaNacimiento;

    @Positive(message = "El peso del pokemon debe ser mayor a 0")
    private double peso;

    @Pattern(regexp = "^\\d{10}$", message = "EL formato del telefono no es valido")
    private String telefonoEntrenador;

    @AssertTrue(message = "El pokemon debe estar sanito")
    private boolean estaSano;



}
