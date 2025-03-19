const memberInformation = document.querySelector('.memberInformation');
const gridButton = document.querySelector('.grid');
const listView = document.querySelector('.list');
const memberAsList = document.querySelector('.memberData');
const dateTime = new Date(document.lastModified);
const yearModified = document.querySelector('.copyrightYear');
yearModified.textContent = `©${dateTime.getFullYear()} Mombasa Chamber Of Commerce`
const modifiedLast = document.querySelector('.lastUpdated');
modifiedLast.textContent = `Last Modified: ${dateTime.toUTCString()}`
const toggleMenu = document.querySelector('#toggleMenuList');
const navList = document.querySelector('nav');


toggleMenu.addEventListener('click', ()=>{
    navList.classList.toggle('open');
    toggleMenu.classList.toggle('open')
  })

gridButton.addEventListener('click', async () => {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        memberInformation.innerHTML = "";
        memberAsList.innerHTML = "";

        members.forEach(member => {
            const memberContainer = document.createElement('div');
            memberContainer.classList.add('business-members');

            const businessName = document.createElement('h3');
            businessName.classList.add('businessName');
            businessName.textContent = member.name;

            const membershipText = ["Member", "Silver", "Gold"][member.membership_level - 1] || "Member";
            const memberShipLevel = document.createElement('span');
            memberShipLevel.classList.add('membershipLevel');
            memberShipLevel.textContent = `Business Tag Line: ${membershipText}`;

            const smallContainer = document.createElement('div');
            smallContainer.classList.add('smallContainer');

            const businessImage = document.createElement('img');
            businessImage.classList.add('businessImage');
            businessImage.src = member.image;
            businessImage.alt = `${member.name} logo`;
            businessImage.loading = 'lazy';

            const divElements = document.createElement('div');
            divElements.classList.add('subDiv');
            
            [
                { label: 'Email', value: member.address },
                { label: 'Phone', value: member.phone },
                { label: 'URL', value: member.website }
            ].forEach(({ label, value }) => {
                const p = document.createElement('p');
                p.innerHTML = `<strong>${label}</strong>: ${value}`;
                divElements.appendChild(p);
            });
            
            smallContainer.appendChild(businessImage);
            smallContainer.appendChild(divElements);

            memberContainer.appendChild(businessName);
            memberContainer.appendChild(memberShipLevel);
            memberContainer.appendChild(smallContainer);
            
            memberInformation.appendChild(memberContainer);
        });
    } catch (error) {
        memberInformation.textContent = `Error fetching data`;
    }
});

listView.addEventListener('click', async () => {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        memberInformation.innerHTML = "";
        memberAsList.innerHTML = "";

        members.forEach((member, index) => {
            const listContainer = document.createElement('div');
            listContainer.classList.add('listContainer');
            if (index % 2 === 0) listContainer.style.backgroundColor = '#b9fbfa';

            [member.name, member.address, member.phone, member.website].forEach(text => {
                const p = document.createElement(text === member.name ? 'h3' : 'p');
                p.textContent = text;
                listContainer.appendChild(p);
            });

            memberAsList.appendChild(listContainer);
        });
    } catch (error) {
        memberInformation.textContent = `Unable to fetch member data`;
    }
});

