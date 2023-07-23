document.getElementById("calculate-btn").addEventListener("click", () => {
    const monthlyContribution = parseFloat(document.getElementById("monthly-contribution").value);
    const yearlyInterestRate = parseFloat(document.getElementById("interest-rate").value);
    const managementFee = parseFloat(document.getElementById("management-fee").value);
    const investmentPeriod = parseInt(document.getElementById("investment-period").value);
  
    // Initialize total savings and total gains
    let totalSavingsBeforeTax = 0;
    let managementFeesTotal = 0;
    let totalGains = 0;
  
    for (let year = 0; year < investmentPeriod; year++) {
      const yearlyContribution = monthlyContribution * 12;
      const interestRateDecimal = yearlyInterestRate / 100;
  
      // Calculate total gains for the current year
      const gains = (yearlyContribution + totalSavingsBeforeTax) * interestRateDecimal;
      totalGains += gains;
  
      // Calculate total savings before tax for the current year
      totalSavingsBeforeTax += yearlyContribution + gains;
  
      // Calculate management fees for the current year based on the current total savings
      const managementFees = totalSavingsBeforeTax * (managementFee / 100);
  
      // Accumulate management fees for all years
      managementFeesTotal += managementFees;
    }
  
    // Calculate total gains before management fees
    const totalGainsBeforeFees = totalGains + (monthlyContribution * 12 * investmentPeriod);
  
    // Calculate total gains after management fees and after tax
    const totalGainsAfterFeesAndTax = totalGainsBeforeFees - managementFeesTotal;
  
    // Calculate total tax paid
    const taxPaid = totalGains * 0.25;
  
    // Calculate total savings after tax and after management fees
    const totalSavingsAfterTaxAndFees = totalSavingsBeforeTax - taxPaid - managementFeesTotal;
  
    // Display the results
    document.getElementById("total-nominal-investment").textContent = (monthlyContribution * 12 * investmentPeriod).toFixed(2);
    document.getElementById("total-gains").textContent = totalGains.toFixed(2);
    document.getElementById("total-savings-before-tax-before-fees").textContent = totalSavingsBeforeTax.toFixed(2);
    document.getElementById("total-saving-before-tax-and-fees").textContent = (totalSavingsBeforeTax - managementFeesTotal).toFixed(2);
    document.getElementById("total-saving-after-tax").textContent = totalSavingsAfterTaxAndFees.toFixed(2);
    document.getElementById("total-tax-paid").textContent = taxPaid.toFixed(2);
    document.getElementById("total-management-fee").textContent = managementFeesTotal.toFixed(2);
  });
  