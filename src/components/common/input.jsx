const Input = ({ name = [], ...rest }) => {
   function firstLetterCapital(word) {
      let newWord = "";
      for (const index in word) {
         newWord += index === "0" ? word[index].toUpperCase() : word[index];
      }
      return newWord;
   }

   return (
      <input
         {...rest}
         name={name}
         placeholder={firstLetterCapital(name)}
         className="form-control input-md"
      />
   );
};

export default Input;
