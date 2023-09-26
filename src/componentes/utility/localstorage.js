const getStoredDonateApplication = () => {
    const storedDonateApplication = localStorage.getItem('donate-application')
    if (storedDonateApplication) {
        return JSON.parse(storedDonateApplication);
    }
    return [];
}

const saveDonateApplication = id => {
    const storedDonateApplications = getStoredDonateApplication();
    const exists = storedDonateApplications.find(donateId => donateId === id);
    if (!exists) {
        storedDonateApplications.push(id);
        localStorage.setItem('donate-application', JSON.stringify(storedDonateApplications))
    }
}
export { getStoredDonateApplication, saveDonateApplication }