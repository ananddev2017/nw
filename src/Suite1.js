module.exports = {
	'Demotest Google1' : function (browser) {
		browser
			.windowMaximize()
			.url('http://www.google.com')
			.waitForElementVisible('body', 1000)
			.setValue('input[type=text]', 'nightwatch')
			.waitForElementVisible('button[name=btnG]', 2000)
			.click('button[name=btnG]')
			.pause(4000)
			.assert.containsText('#main', 'Night Watch')
			//.end();
		},

	'Demotest Google2' : function (client) {
		client
			.url('http://google.no')
			.pause(5000);

			client.expect.element('body').to.be.present;

			client.expect.element('#lst-ib').to.have.css('display');

			client.expect.element('body').to.have.attribute('class').which.contains('vasq');
			client.expect.element('body').to.have.attribute('class').which.matches(/vasq$/);
			client.expect.element('body').to.have.attribute('class').before(3000);

			client.expect.element('#lst-ib').to.be.enabled;

			// client.expect.element('#hplogo').text.to.match(/Norge/).before(4000);
			client.waitForElementVisible('body', 1000)
			//client.setValue('input[type=text]', 'Norway p')
			client.setValue('#lst-ib', 'Norway').pause(5000);
			client.expect.element('#lst-ib').to.have.value.equal('Norhgghway');
			client.expect.element('#lst-ib').to.be.an('input');
			client.expect.element('#lst-ib').to.be.not.selected;
			client.expect.element('#lst-ib').to.be.visible;
			//client.end();
		},

	'Demotest GitHub3' : function (client) {
		client
			.url('https://github.com/nightwatchjs/nightwatch')
			.waitForElementVisible('body', 1000)
			.assert.visible('.container h1 strong a')
			.assert.containsText('.container h1 strong a', 'nightwatch', 'Checking project title is set to nightwatch');
		},

		after : function(client) {
			client.end();
		}


};