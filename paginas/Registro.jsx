import React from 'react'
import { useForm } from 'react-hook-form'
import "../src/App.css"

const Registro = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className='containerRegister'>
        <div>
          <img width={"300px"} src="assets\Cream and Green Simple Clean Online Store Logo_page-0001.jpg" alt="" />
        </div>
        <div>
          <p>¿Ya estas registrado? Ingresar</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Crear cuenta</h1>
            <input defaultValue="Nombres" {...register("Nombres")} />
            <input defaultValue="Apellidos" {...register("Apellidos")} />
            <input defaultValue="Correo" {...register("correo")} />
            <br />
            <input {...register("contraseña", { required: true })} />
            <br />
            {errors.exampleRequired && <span>Este campo es requerido</span>}
            <input type="submit" value="Crear" />
          </form>
          <hr />
          <div>
            <button>Registrase con Facebook</button>
            <button>Registrase con Google</button>
          </div>
        </div>
      </div>



    </>
  )
}

export default Registro
