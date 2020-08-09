import React, { useState, useContext } from "react"
import { useRouter } from "next/router"
import { useForm } from 'react-hook-form'
import { Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { MdError } from 'react-icons/md'


import colors from "utils/colors"
import Logo from "components/Logo"
import Button from "components/Button"
import { emailRegex } from "utils/validators"
import TextIcon from "components/TextIcon"
import SEO from "components/SEO"
import { AppContext } from "store/app-context"
import Container from "components/Container"
import Link from "next/link"

const useStyles = makeStyles({
  errorTitle: {
    color: colors.red
  }
})

export interface SignupData {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  country?: string
}

export default function Signup() {
  const router = useRouter()
  const styles = useStyles()
  const { auth } = useContext(AppContext)
  const { register, errors, handleSubmit } = useForm<SignupData>({
    mode: 'onBlur'
  })
  const [loginError, setLoginError] = useState("")
  const currentUser = auth.data

  const Signup = async (data: SignupData) => { }

  if (auth.isLoggedIn) return router.replace("/")

  return (
    <>
      <SEO title={`Créez Votre Compte`} />
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container>
          <Link href="/">
            <a>
              <Logo style={{ width: 250 }} />
            </a>
          </Link>
          {/* <h1 style={{ fontSize: 12 }}>To continue, log in to MP3 Pam.</h1> */}

          <form onSubmit={handleSubmit(Signup)} noValidate>
            {loginError && <h3 className={styles.errorTitle} dangerouslySetInnerHTML={{ __html: loginError }} />}
            <Grid container style={{ maxWidth: 400 }}>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '100%' }}
                  inputRef={register({
                    required: "Le prénom est requis",
                  })}
                  name="firstName"
                  id="firstName"
                  label="Votre Prénom"
                  type="text"
                  margin="normal"
                  error={!!errors.firstName}
                  helperText={errors.firstName && (
                    <TextIcon
                      icon={<MdError />}
                      text={errors.firstName.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '100%' }}
                  inputRef={register({
                    required: "Le Nom est requis",
                  })}
                  name="lastName"
                  id="lastName"
                  label="Votre Nom"
                  type="text"
                  margin="normal"
                  error={!!errors.lastName}
                  helperText={errors.lastName && (
                    <TextIcon
                      icon={<MdError />}
                      text={errors.lastName.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '100%' }}
                  inputRef={register({
                    required: "L'email est requis",
                    pattern: {
                      value: emailRegex,
                      message: "L'email n'est pas valide"
                    }
                  })}
                  name="email"
                  id="email"
                  label="Votre Email"
                  type="email"
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email && (
                    <TextIcon
                      icon={<MdError />}
                      text={errors.email.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '100%' }}
                  inputRef={register({
                    required: "Le Mot de Passe est requis",
                    minLength: {
                      value: 6,
                      message: "Le Mot de Passe doit avoir au moins 6 characters."
                    }
                  })}
                  name="password"
                  id="password"
                  label="Votre Mot de Passe"
                  type="password"
                  margin="normal"
                  error={!!errors.password}
                  helperText={errors.password && (
                    <TextIcon
                      icon={<MdError />}
                      text={errors.password.message}
                    />)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '100%' }}
                  inputRef={register({
                    required: "Le numéro de téléphone est requis"
                  })}
                  name="phone"
                  id="phone"
                  label="Votre Numéro de Téléphone"
                  type="phone"
                  margin="normal"
                  error={!!errors.phone}
                  helperText={errors.phone && (
                    <TextIcon
                      icon={<MdError />}
                      text={errors.phone.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '100%' }}
                  inputRef={register()}
                  name="country"
                  id="country"
                  label="Votre Pays de Résidence"
                  type="country"
                  margin="normal"
                  error={!!errors.country}
                  helperText={errors.country && (
                    <TextIcon
                      icon={<MdError />}
                      text={errors.country.message}
                    />)}
                />
              </Grid>
            </Grid>

            <Button style={{
              background: colors.orange,
              color: colors.white,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              marginTop: 12,
              marginBottom: 24
            }} title="Créer Mon Compte" />
          </form>

          <p>
            Avez-vous déjà un compte ? {' '}
            <Link href="/login">
              <a style={{ color: colors.orange, fontWeight: 'bold' }}>
                Connectez-vous.
              </a>
            </Link>
          </p>
        </Container>
      </section >
    </>
  )
}