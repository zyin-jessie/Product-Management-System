import bcrypt from 'bcrypt'

class Bcrypt {
    public saltRound = 10;

    public hashPassword = (password: string): string => {
        try {
            const hashPassword = bcrypt.hashSync(password, this.saltRound);
            return hashPassword;
        }catch(error) {
            throw new Error("Error hashing password");
        }
    };

    public comparePassword = (plainPassword: string, hashPassword: string) => {
        try {
            const comparePassword = bcrypt.compareSync(plainPassword, hashPassword);
            return comparePassword;
        }catch(error) {
            throw new Error("Error comparing password");
        }
    };

};

export default new Bcrypt();
