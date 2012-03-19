function PlatformWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	// create table view data object
	var data = [
		{title:'XHR', hasChild:true, test:'ui/common/platform/xhr'},
		{title:'Network', hasChild:true, test:'ui/common/platform/network'},
		{title:'Common JS', hasChild:true, test:'ui/common/platform/commonjs'},
		{title:'Logging', hasChild:true, test:'ui/common/platform/logging'},
		{title:'Application Data', hasChild:true, test:'ui/common/platform/app_data'},
		{title:'Application Events', hasChild:true, test:'ui/common/platform/app_events'},
		{title:'Properties API', hasChild:true, test:'ui/common/platform/properties'},
		{title:'Database', hasChild:true, test:'ui/common/platform/database'},
		{title:'Platform Data', hasChild:true, test:'ui/common/platform/platform'},
		{title:'Filesystem', hasChild:true, test:'ui/common/platform/filesystem'},
		{title:'JS Includes', hasChild:true, test:'ui/common/platform/js_include'},
		{title:'Set Timeout (timer)', hasChild:true, test:'ui/common/platform/set_timeout'},
		{title:'Set Interval (timer)', hasChild:true, test:'ui/common/platform/set_interval'},
		{title:'XML RSS', hasChild:true, test:'ui/common/platform/xml_rss'},
		{title:'Utils', hasChild:true, test:'ui/common/platform/utils'},
		{title:'JSON', hasChild:true, test:'ui/common/platform/json'},
		{title:'JS search', hasChild:true, test:'ui/common/platform/search_case_insensitive'},
		{title:'Clipboard', hasChild:true, test:'ui/common/platform/clipboard'},
		{title:'Sockets', hasChild:true, test:'ui/common/platform/sockets'}
	];
	
	if (Titanium.Platform.name == 'iPhone OS') {
		data.push({title:'Passing Data (windows)', hasChild:true, test:'ui/handheld/ios/platform/custom_properties'});
		data.push({title:'Bonjour', hasChild:true, test:'ui/handheld/ios/platform/bonjour'});
	}
	
	if (Titanium.Platform.osname === 'android') {
		data.push({title: 'Android services', hasChild:true, test:'ui/handheld/android/platform/android_services'});
	}
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow(e.rowData.title);
			self.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = PlatformWindow;
