package bsu.fpmi.profit;

import org.apache.commons.codec.digest.DigestUtils;

public class HashingUtil {
    public static String getHash(String password) {
        return DigestUtils.sha512Hex(password);
    }

    public static boolean isHashEqual(String password, String passwordHash) {
        String currentPasswordHash = getHash(password);
        return currentPasswordHash.equals(passwordHash);
    }
}
