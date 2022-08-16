/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/ - easy
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let prev = nums[0];
  let ptr = 1;
  for (let i = 1; i < nums.length; i++) {
    if (prev !== nums[i]) {
      nums[ptr] = nums[i];
      prev = nums[i]
      ptr++;
    }
  }
  return ptr;
};

// Leet code
var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[j] != nums[i]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));



"snvrcpaywg"
"bpzqiabvfoycdesgjqzijqwdgvsetpbxltggvngvitbddfoatgxjgweahffmlfbnrqjxntqoxshzrvwsvchxhlwjablxfxebdlyyogepeoevrozsmuhxtzwuanrzjqsjpfcnoxzmkfskvttwbbijgnvmlvrhusyncngiagjveozhyeyaqgqqwawbckimryslymostqrgbfaqfnzyczijisjwtuvlufvaugeebmkwxrouvzhfujlhwbwhfgkanjkbvoqmtyabcbwrkpuognuyhjzvxktsouwrfpsqrpcrrzqyuvxawkijnoznlxouhuwgwkfuihnjtcklvpgrzzblybnoznhsqyvyjoyzxkdbznhidzuwqbsjjtcsixxfjhvdvsmhtgepexrhddybqncmsomhxjgiruedpsrsasnosxavmomyxhdkeziwapjkscapaerzxstvfygmqdejitsefuiubyzclqtsxjhadtsybhmyrbjtqaxjkmhzwmqndlxuxvsuudnxqpaveddpkqbeziiziywtzazgpinmnzspruzvhelzseioyrdjsqjshmczkvrkqylbmxsrbaxcvisqkfcosonnfbveucnkcinfazivtfbcarkmpkyggiondhpzrcwefsozefgpftoikjwqgyxbyxucjsrmhecuyybqkyipbpxuncpobfmwjlwjluricyzjvrlqtqpdhqfyoezqshascjpqamewpharnsmlfzoorxtpuwpnbkgpzkganupisydhbzfrzhzvanspwrnvcaypomxiwzenytaodqmgeayivdwiifgkpaicihqhgmvjmromkclqrfgpkeoirinccsxvmylxcgqdktusjpxwmqxasmwloxjyjxqqkghqipztfuygkqpkywtywdoxdeljwttcwanolzdacvsnxqbdmbswhzzfzxogpcsxxasgzzqqekabfpnjkkltdrufgukbporvabcbhslxvpdiogmrrtvncqmpykeqaklzwylbvbxlrnwrxosmgdbpilqhbdlbduygiukhflnwoshsmuauiqrwvrpiqekhpziipcphktcwppsvxtrpxiyubxymkzvdnvqazvuhjpayuorhfeknrkwjjzwwycorfjilaabtfgyqpqzxlfrlufdzxujanmyhmalqlkbhnydmbftgcxqitabxhiehmuwauinaukktcubfdhchzmouqfvhzijfitfjbnlnwkupdvqniylsufidhmmszwcipxkktmnruthlxtdnekdjcoxhhyiesazkwqgfusfaevniordhhazhslskhzepyzkpwstea"