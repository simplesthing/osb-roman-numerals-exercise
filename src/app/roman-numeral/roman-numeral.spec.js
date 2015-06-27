'use strict';

describe('RomanNumeralService', function(){
var RomanNumeralService;

	beforeEach(function(){
		module('roman-numerals');
	});

	beforeEach(inject(function(_$httpBackend_, _RomanNumeralService_){
		RomanNumeralService = _RomanNumeralService_;
	}));

	afterEach(function () {
		RomanNumeralService = undefined;
	});

	describe('convertArgsToArray', function(){
		it('should convert Number argument in to an array of characters', function(){
			// console.log(RomanNumeralService.toRomanNumeral(1999));
			// console.log(RomanNumeralService.convertArgsToArray(1999));
			expect(RomanNumeralService.convertArgsToArray(1999)).toBeArray();
		});
		it('should return the array of characters in reverse sequence', function(){
			expect(RomanNumeralService.convertArgsToArray(1999)).toEqual(['9','9','9','1']);
		});
	});
	describe('checkOnes', function(){
		it('should return roman numeral for number in ones column', function(){
			expect(RomanNumeralService.checkOnes(['1'])).toEqual(['I']);
			expect(RomanNumeralService.checkOnes(['2'])).toEqual(['II']);
			expect(RomanNumeralService.checkOnes(['3'])).toEqual(['III']);
			expect(RomanNumeralService.checkOnes(['4'])).toEqual(['IV']);
			expect(RomanNumeralService.checkOnes(['5'])).toEqual(['V']);
			expect(RomanNumeralService.checkOnes(['6'])).toEqual(['VI']);
			expect(RomanNumeralService.checkOnes(['7'])).toEqual(['VII']);
			expect(RomanNumeralService.checkOnes(['8'])).toEqual(['VIII']);
			expect(RomanNumeralService.checkOnes(['9'])).toEqual(['IX']);
		});
	});

	describe('checkTens', function(){
		it('should return roman numeral for number in tens column', function(){
			expect(RomanNumeralService.checkTens(['0','1'])).toEqual(['0','X']);
			expect(RomanNumeralService.checkTens(['0','2'])).toEqual(['0','XX']);
			expect(RomanNumeralService.checkTens(['0','3'])).toEqual(['0','XXX']);
			expect(RomanNumeralService.checkTens(['0','4'])).toEqual(['0','XL']);
			expect(RomanNumeralService.checkTens(['0','5'])).toEqual(['0','L']);
			expect(RomanNumeralService.checkTens(['0','6'])).toEqual(['0','LX']);
			expect(RomanNumeralService.checkTens(['0','7'])).toEqual(['0','LXX']);
			expect(RomanNumeralService.checkTens(['0','8'])).toEqual(['0','LXXX']);
			expect(RomanNumeralService.checkTens(['0','9'])).toEqual(['0','XC']);
		});
	});

	describe('checkHundreds', function(){
		it('should return roman numeral for number in hundreds column', function(){
			expect(RomanNumeralService.checkHundreds(['0','0','1'])).toEqual(['0','0','C']);
			expect(RomanNumeralService.checkHundreds(['0','0','2'])).toEqual(['0','0','CC']);
			expect(RomanNumeralService.checkHundreds(['0','0','3'])).toEqual(['0','0','CCC']);
			expect(RomanNumeralService.checkHundreds(['0','0','4'])).toEqual(['0','0','CD']);
			expect(RomanNumeralService.checkHundreds(['0','0','5'])).toEqual(['0','0','D']);
			expect(RomanNumeralService.checkHundreds(['0','0','6'])).toEqual(['0','0','DC']);
			expect(RomanNumeralService.checkHundreds(['0','0','7'])).toEqual(['0','0','DCC']);
			expect(RomanNumeralService.checkHundreds(['0','0','8'])).toEqual(['0','0','DCCC']);
			expect(RomanNumeralService.checkHundreds(['0','0','9'])).toEqual(['0','0','CM']);
		});
	});

	describe('checkThousands', function(){
		it('should return roman numeral for number in hundreds column', function(){
			expect(RomanNumeralService.checkThousands(['0','0','0','1'])).toEqual(['0','0','0','M']);
			expect(RomanNumeralService.checkThousands(['0','0','0','2'])).toEqual(['0','0','0','MM']);
			expect(RomanNumeralService.checkThousands(['0','0','0','3'])).toEqual(['0','0','0','MMM']);
			expect(RomanNumeralService.checkThousands(['0','0','0','4'])).toEqual(['0','0','0','MMMM']);
			expect(RomanNumeralService.checkThousands(['0','0','0','5'])).toEqual(['0','0','0','MMMMM']);
			expect(RomanNumeralService.checkThousands(['0','0','0','6'])).toEqual(['0','0','0','MMMMMM']);
			expect(RomanNumeralService.checkThousands(['0','0','0','7'])).toEqual(['0','0','0','MMMMMMM']);
			expect(RomanNumeralService.checkThousands(['0','0','0','8'])).toEqual(['0','0','0','MMMMMMMM']);
			expect(RomanNumeralService.checkThousands(['0','0','0','9'])).toEqual(['0','0','0','MMMMMMMMM']);
		});
	});

	describe('integerToRomanNumeral', function(){
		it('should return Roman Numerals', function(){		
			expect(RomanNumeralService.integerToRomanNumeral(1999)).toEqual('MCMXCIX');
		});
	});
});


