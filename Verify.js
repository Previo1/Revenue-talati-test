document.getElementById('verifyBtn').addEventListener('click', () => {
  const file = document.getElementById('paymentScreenshot').files[0];

  if (!file) {
    alert("કૃપા કરીને પેમેન્ટનું સ્ક્રીનશોટ અપલોડ કરો.");
    return;
  }

  const isVerified = confirm("📋 શું Admin દ્વારા પેમેન્ટ વેરિફાય થઈ ગયું છે?");
  if (isVerified) {
    document.getElementById('downloadLink').style.display = 'inline-block';
    alert("✅ સફળતાપૂર્વક ચકાસી લેવામાં આવ્યું! હવે PDF ડાઉનલોડ કરો.");
  }
});
