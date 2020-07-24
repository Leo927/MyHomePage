function checkGenericField(field,event,isOK)
{
	if(isOK){
		field.classList.remove("input-error");
		document.getElementById(field.id+"_msg").classList.add("hidden");
		return true;
	}
	else{
		field.classList.add("input-error");
		document.getElementById(field.id+"_msg").classList.remove("hidden");
		if(event!=null)
			event.preventDefault();
		return false;
	}
}

function checkField(field, regex, event, isOK=true){
	return checkGenericField(field,event,regex.test(field.value)&&isOK);
}

function checkDateField(field, event, isOK=true)
{
	return checkGenericField(field,event,isDate(field.value)&&isOK );
}

function isDate(value) {
    switch (typeof value) {
        case 'number':
            return true;
        case 'string':
            return !isNaN(Date.parse(value));
        case 'object':
            if (value instanceof Date) {
                return !isNaN(value.getTime());
            }
        default:
            return false;
    }
}