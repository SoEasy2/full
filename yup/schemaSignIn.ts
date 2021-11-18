import * as yup from 'yup'
export const schemaSignUp = yup.object().shape({
    signUpEmail:yup.string().email('Invalid email type').required('Required field'),
    signUpConfirmEmail:yup.string().oneOf([yup.ref('signUpEmail')],'Email mismatch').required('Required field'),
    signUpPassword:yup.string().required('Required field'),
    signUpConfirmPassword:yup.string().oneOf([yup.ref('signUpPassword')],'Password mismatch').required('Required field')
})
export const schemaSignIn = yup.object().shape({
    email:yup.string().email('Invalid email type').required('Required field'),
    password:yup.string().required('Required field')
})