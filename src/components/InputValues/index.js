import * as C from './styles';

export default function InputValues(props){
  
  const {
    text,
    value,
    name,
    type,
    placeholder,
    onChangeText,
    keyboardType,
    error,
    autoCapitalize,
    maxLength,
    returnKeyType,
    onSubmitEditing,
    blurOnSubmit,
    inputRef,
    onFocus,
    secureTextEntry,
    bgColor
  } = props

  return (
    <C.ContainerInput>
       <C.TextComponent bgColor={bgColor}>{text}</C.TextComponent>
          <C.FildInpult
            ref={inputRef}
            autoCapitalize={autoCapitalize}
            value={value}
            name={name}
            type={type}
            placeholder={placeholder}
            placeholderTextColor={"#888888"}
            onChangeText={onChangeText} 
            keyboardType = {keyboardType}
            maxLength={maxLength}
            returnKeyType={returnKeyType} 
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={blurOnSubmit}
            onFocus={onFocus}
            secureTextEntry={secureTextEntry}
             />
            {error && !value ? 
                 <C.RequiredTextView>
                    <C.RequiredText>Preencha todos os campos *</C.RequiredText>
                 </C.RequiredTextView>
                : ''}
    </C.ContainerInput>
  );
};
