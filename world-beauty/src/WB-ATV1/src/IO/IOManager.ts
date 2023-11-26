import promptSync from 'prompt-sync';

const prompt = promptSync();

export default class IOManager {
    public static GetString(msg: string, errorMsg: string = "\n"): string {
        const input = prompt(`${msg}: `);
        if (!input) {
            console.log(errorMsg);
            return this.GetString(msg, errorMsg);
        }
        return input.toString();
    }

    public static GetInt(msg: string, errorMsg: string = "\n"): number {
        const input = prompt(`${msg}: `);
        if (!input) {
            console.log(errorMsg);
            return this.GetInt(msg, errorMsg);
        }
        return parseInt(input) || 0;
    }

    public static GetFloat(msg: string, errorMsg: string = "\n"): number {
        const input = prompt(`${msg}: `);
        if (!input) {
            console.log(errorMsg);
            return this.GetFloat(msg, errorMsg);
        }
        return parseFloat(input) || 0;
    }

    public static GetBool(msg: string, ySymbol: string = "S", nSymbol: string = "N", errorMsg: string = "\n"): Boolean {
        const input = prompt(`${msg} (${ySymbol}/${nSymbol}): `);
        if (!input) {
            console.log(errorMsg);
            return this.GetBool(msg, ySymbol, nSymbol, errorMsg);
        }

        switch(input) {
            case ySymbol:
                return true;
            case nSymbol:
                return false;
            default:
                return this.GetBool(msg, ySymbol, nSymbol, errorMsg);
        }
    }

    public static GetDate(msg: string, dateOrder: string = "dma", dateSeparator: string = "/", errorMsg: string = "\n"): Date {
        const dateFormatString = dateOrder[0] + dateSeparator + dateOrder[1] + dateSeparator + dateOrder[2];

        const input = prompt(`${msg} (${dateFormatString}): `).split(dateSeparator);
        if (!input) {
            console.log(errorMsg);
            return this.GetDate(msg, dateOrder, dateSeparator, errorMsg);
        }

        const ano = input[dateOrder.toLowerCase().indexOf("a")];
        const mes = input[dateOrder.toLowerCase().indexOf("m")];
        const dia = input[dateOrder.toLowerCase().indexOf("d")];

        return new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
    }
}