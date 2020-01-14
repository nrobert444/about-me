export default function isYes(str) {
    const lowerInput = str.toLowerCase();
    if (lowerInput === 'yes' || 'y' || 'yeah') {
        return true;
    } else {
        return false;
    }

};