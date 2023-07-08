import type { PlasmoCSConfig } from 'plasmo';





export const config = {
  matches: [
    'https://secure.lloydsbank.co.uk/personal/a/logon/entermemorableinformation.jsp',
  ],
  world: 'MAIN',
} satisfies PlasmoCSConfig;

window.addEventListener('load', () => {
  if (window.location.href !== config.matches[0]) return;

  const secret = 'REPLACEME';

  if (!secret || secret === 'REPLACEME') {
    throw new Error('No secret provided');
  }

  console.log(
    'Loaded, attempting to set memorable information for Lloyds Bank'
  );

  // wait for content to load
  setTimeout(() => {
    console.log('Attempting to get selects and wanted chars');
    const wanted = [1, 2, 3].map(
      (i) =>
        Number(
          document
            .querySelector(
              `label[for="frmentermemorableinformation1:strEnterMemorableInformation_memInfo${i}"]`
            )
            ?.textContent?.trim()
            .replace('Character ', '')
            .replace(' :', '')
        ) - 1
    );

    const selects = [1, 2, 3].map(
      (i) =>
        document.getElementById(
          `frmentermemorableinformation1:strEnterMemorableInformation_memInfo${i}`
        ) as HTMLSelectElement | null
    );

    if (!selects.includes(null)) {
      console.log('Selects found, setting values');
      console.log(wanted);
      selects[0].value = '&nbsp;a';
      wanted.forEach((val, i) => {
        selects[i].value = `&nbsp;${secret[val].toLowerCase()}`;
        console.log(`Set select ${i} to ${secret[val]}`);
      });
    }
  }, 1000);
});