export default function isYes(str) {
    console.log(str);
    const lowerInput = str.toLowerCase();
    if (lowerInput === 'yes' || lowerInput === 'y' || lowerInput === 'yeah') return true;
     else return false;
};